Legacy core banking systems (often running on mainframes or AS/400) typically operate in batch mode, meaning they cannot process real-time transactions 24/7, especially during End of Day (EOD) processing or scheduled maintenance.
To support 24/7 ATM availability while the core system is offline, banks use a decoupled architecture involving an ATM Switch (middleware) and a mechanism known as Stand-In Processing (STIP).
Here is the detailed workflow of how this is handled.
1. The Architecture: Switch vs. Core
In a legacy environment, the ATM does not talk directly to the Core Banking System (CBS). Instead, it talks to a Payment Switch (e.g., Base24, Postilion, Connex).
 * Normal Mode: The Switch receives the ATM request, routes it to the Core for authorization, gets the response, and sends it back to the ATM.
 * Maintenance/EOD Mode: The Switch detects that the Core is unavailable (or is manually disconnected) and "stands in" to authorize transactions itself.
2. How "Stand-In" Works (The Offline Phase)
When the Core Banking System goes down for maintenance or EOD batch runs, the Switch creates a temporary "approval bubble" using the following mechanisms:
A. Positive Balance File (PBF)
Before the Core goes offline (e.g., at 11:30 PM), it generates a Positive Balance File (PBF).
 * What it is: A lightweight snapshot file containing the account numbers and available balances of all customers.
 * The Process: This file is uploaded to the ATM Switch.
 * Usage: When you insert your card during maintenance, the Switch checks this local file instead of the real Core database to see if you have funds.
B. Shadow Balances (Stand-In Database)
Some systems maintain a "Shadow Ledger" in the Switch that is updated in real-time throughout the day. When the Core goes offline, the Switch simply keeps using this shadow balance for authorizations.
C. Store and Forward (SAF)
This is the critical "memory" mechanism.
 * Store: Since the Core is offline, the Switch cannot update the main ledger. Instead, every transaction authorized locally (via PBF/Shadow) is written to a Store and Forward (SAF) Queue.
 * Status: The customer gets their cash, and the receipt is printed. To the customer, the transaction is complete. To the bank, the transaction is "pending posting."
3. Recovery: The "Catch-Up" Phase
Once the Core Banking System finishes its maintenance or EOD batch (e.g., at 4:00 AM) and comes back online:
 * Connection Restored: The Switch reconnects to the Core.
 * Forwarding (Replay): The Switch starts the SAF Replay process. It pushes all the queued transactions from the SAF file to the Core one by one (or in micro-batches).
 * Posting: The Core receives these "late" transactions and posts them to the customer accounts effectively backdating them or posting them as current-day business depending on the bank's accounting logic.
 * Balance Update: The Core's master ledger is now accurate.
4. Risks and Challenges
Operating in this mode introduces specific risks that legacy banks manage carefully:
| Challenge | Description |
|---|---|
| The "Gap" Risk | If a customer writes a cheque that clears just before maintenance, but the PBF was generated before that cheque cleared, the PBF might show a higher balance than arguably exists. This can lead to a technical overdraft. |
| Credit Limits | During Stand-In, the Switch often applies lower withdrawal limits (e.g., $200 instead of $1,000) to minimize the risk of fraud or overdrafts while the master ledger is unreachable. |
| Missing Data | Complex transactions (like updating a PIN or full statement printing) often fail during maintenance because they require deep access to the Core which the PBF cannot provide. |
Summary of the Workflow
 * Core prepares for EOD: Generates PBF (balances) \rightarrow Sends to Switch.
 * Core goes Offline: Disconnects from Switch.
 * ATM Transaction Occurs:
   * Switch checks PBF (Approved).
   * Switch writes to SAF Queue (Stored).
   * ATM dispenses cash.
 * Core comes Online: Reconnects to Switch.
 * Reconciliation: Switch "Forwards" SAF Queue \rightarrow Core updates Master Ledger.
Next Step
If you are working on a migration or integration project, would you like me to detail the ISO 8583 message fields used to indicate a transaction is a "Store and Forward" (late presentment) so the Core knows not to decline it for duplicate timestamps?
,,,

flowchart TD
    Start([ATM Request Received]) --> IsCoreUp{Is Core System<br/>Online?}

    %% Online Path
    IsCoreUp -- YES --> RouteToCore[Route to Core Banking]
    RouteToCore --> CoreResp{Core Response?}
    CoreResp -- Approved --> SendSuccess[Send Success to ATM]
    CoreResp -- Declined --> SendDecline[Send Decline to ATM]

    %% Offline/Stand-In Path
    IsCoreUp -- NO --> CheckSTIP[Initiate Stand-In Processing]
    CheckSTIP --> CheckLimits{Check Stand-In<br/>Limits}
    
    CheckLimits -- Limit Exceeded --> SendDecline
    CheckLimits -- Within Limit --> CheckPBF{Check Positive<br/>Balance File}
    
    CheckPBF -- Insufficient Funds --> SendDecline
    CheckPBF -- Funds Available --> LogSAF[Log to Store & Forward<br/>(SAF Queue)]
    
    LogSAF --> UpdateShadow[Update Local Shadow Balance]
    UpdateShadow --> SendSuccess
    
    %% Styling
    style Start fill:#f9f,stroke:#333,stroke-width:2px
    style LogSAF fill:#bbf,stroke:#333,stroke-width:2px
    style RouteToCore fill:#bfb,stroke:#333,stroke-width:2px


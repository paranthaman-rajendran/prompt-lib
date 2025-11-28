sequenceDiagram
    autonumber
    actor Customer
    participant ATM
    participant Switch as Payment Switch
    participant SAF as Store & Forward (DB)
    participant Core as Legacy Core Banking

    Note over Switch, Core: Phase 1: Preparation (Pre-EOD)
    Core->>Switch: Upload Positive Balance File (PBF)
    Note right of Switch: Switch updates local shadow balances

    Note over Switch, Core: Phase 2: Maintenance/EOD Starts
    Core--xSwitch: Connection Severed (Batch Mode)

    Note over Customer, SAF: Phase 3: Stand-In Processing (Offline)
    Customer->>ATM: Insert Card & Request Cash
    ATM->>Switch: Authorization Request
    
    rect rgb(240, 240, 240)
        Note right of Switch: Switch detects Core is Offline
        Switch->>Switch: Check PBF / Shadow Balance
        alt Sufficient Funds
            Switch->>SAF: Save Transaction to Queue (SAF)
            Switch-->>ATM: Approve Transaction
            ATM-->>Customer: Dispense Cash
        else Insufficient Funds
            Switch-->>ATM: Decline
            ATM-->>Customer: Show Error Message
        end
    end

    Note over Switch, Core: Phase 4: Recovery (Post-EOD)
    Core-->>Switch: Connection Restored (Online)
    loop SAF Replay
        Switch->>SAF: Read Queued Transactions
        SAF->>Switch: Return Transaction Details
        Switch->>Core: Post Transaction (Force Post)
        Core->>Core: Update Main Ledger
        Core-->>Switch: Acknowledge (ACK)
    end

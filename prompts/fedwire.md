sequenceDiagram
    participant OC as Originating Customer
    participant OB as Originating Bank (Sender FI)
    participant FFS as Fedwire Funds Service
    participant RB as Receiving Bank (Receiver FI)
    participant BC as Beneficiary Customer

    OC->>OB: Initiate payment request (amount, beneficiary details)
    OB->>OB: Validate request and compliance checks
    OB->>FFS: Send payment instruction (Fedwire message)
    FFS->>FFS: Real-time processing and settlement
    FFS->>RB: Send payment notification
    RB->>RB: Credit funds to Beneficiary Customer account
    RB->>BC: Notify Beneficiary of funds received
    OB->>OC: Confirm payment sent and completed
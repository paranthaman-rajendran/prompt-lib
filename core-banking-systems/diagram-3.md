graph LR
    subgraph "Branch / ATM Network"
        ATM1[ATM 001]
        ATM2[ATM 002]
    end

    subgraph "Middleware Layer (Always On)"
        Switch[ATM Switch]
        PBF[(Positive Balance File)]
        SAF[(SAF Queue)]
        
        Switch <--> PBF
        Switch --> SAF
    end

    subgraph "Back Office (Batch Mode)"
        Core[Legacy Mainframe]
        Ledger[(Master Ledger)]
        
        Core --- Ledger
    end

    %% Connections
    ATM1 <--> Switch
    ATM2 <--> Switch
    
    Switch -.->|❌ BROKEN LINK ❌<br/>(Maintenance Window)| Core
    SAF -.->|Delayed Replay| Core
    Core -.->|Pre-Maintenance Sync| PBF

    style Switch fill:#ff9,stroke:#333
    style Core fill:#ccc,stroke:#333
    style SAF fill:#f96,stroke:#333

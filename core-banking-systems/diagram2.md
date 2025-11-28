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

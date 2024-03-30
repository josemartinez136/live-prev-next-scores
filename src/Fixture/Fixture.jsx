const Fixture = ({
    matchData,
    homeTeam,
    awayTeam
}) => {
    return (
        <div className="live-container">
            {
                matchData &&

                <div className="game-container">
                    <div className="league">
                        <img
                            src={matchData.logo}
                            className="league-logo"
                            alt=""
                        />
                        <h4 className="league-name">{matchData.league}</h4>
                    </div>
                    <div className="teams-container">
                        <div className="team-box">
                            <img
                                src={homeTeam.logo}
                                alt=""
                                className="team-logo"
                            />
                            <h4 className="team-name">{homeTeam.name}</h4>
                        </div>
                        <p className={matchData.status !== "notstarted" ? "result" : null}>
                            {
                                matchData.status === "notstarted" ? "VS" : matchData.result
                            }
                        </p>
                        <div className="team-box">
                            <img
                                src={awayTeam.logo}
                                alt=""
                                className="team-logo" />
                            <h4 className="team-name">{awayTeam.name}</h4>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Fixture

const findClosestPreviousMatch = ({
    setLastHomeTeam,
    setLastAwayTeam,
    setLastMatchData,
}) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '056b5c7718msh6b7cb2d6b871933p134f8fjsn98412a232a71',
            'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
        }
    };

    fetch('https://sportscore1.p.rapidapi.com/teams/145/events?page=1', options)
        .then(response => {
            response.json()
                .then(res => {
                    console.log(res.data[0]);
                    const fixtures = res.data;
                    const [fixture] = closestPreviousFixture(fixtures);
                    const updatednextHomeTeam = {
                        id: fixture.home_team_id,
                        name: fixture.home_team?.name,
                        logo: fixture.home_team?.logo,
                        currentScore: fixture.home_score?.current,
                    }
                    const updatednextAwayTeam = {
                        id: fixture.away_team_id,
                        name: fixture.away_team?.name,
                        logo: fixture.away_team?.logo,
                        currentScore: fixture.away_score?.current,
                    }
                    const updatednextMatchData = {
                        status: fixture.status,
                        league: fixture.league?.name,
                        logo: fixture.league?.logo,
                        result: fixture.home_score?.current + "_" + fixture.away_score?.current || null,
                    }
                    setLastHomeTeam(team => ({
                        ...team,
                        ...updatednextHomeTeam,
                    }));

                    setLastAwayTeam(team => ({
                        ...team,
                        ...updatednextAwayTeam,
                    }));

                    setLastMatchData(lastMatchData => ({
                        ...lastMatchData,
                        ...updatednextMatchData,
                        result: "1-0"
                    }))

                    console.log(updatednextHomeTeam);
                    console.log(updatednextMatchData);
                })
        })
        .catch(err => console.error(err));
}



const findClosestNextMatch = ({
    setNextHomeTeam,
    setNextAwayTeam,
    setNextMatchData,
}) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '056b5c7718msh6b7cb2d6b871933p134f8fjsn98412a232a71',
            'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
        }
    };

    fetch('https://sportscore1.p.rapidapi.com/teams/145/events?page=1', options)
        .then(response => {
            response.json()
                .then(res => {
                    console.log(res.data[0]);
                    const fixtures = res.data;
                    const [fixture] = closestNextFixture(fixtures);


                    const updatednextHomeTeam = {
                        id: fixture.home_team_id,
                        name: fixture.home_team?.name,
                        logo: fixture.home_team?.logo,
                        currentScore: fixture.home_score?.current,
                    }


                    const updatednextAwayTeam = {
                        id: fixture.away_team_id,
                        name: fixture.away_team?.name,
                        logo: fixture.away_team?.logo,
                        currentScore: fixture.away_score?.current,
                    }

                    const updatednextMatchData = {
                        status: fixture.status,
                        league: fixture.league?.name,
                        logo: fixture.league?.logo,
                        result: fixture.home_score?.current + "_" + fixture.away_score?.current || null,
                    }

                    setNextHomeTeam(team => ({
                        ...team,
                        ...updatednextHomeTeam,
                    }));

                    setNextAwayTeam(team => ({
                        ...team,
                        ...updatednextAwayTeam,
                    }));

                    setNextMatchData(nextMatchData => ({
                        ...nextMatchData,
                        ...updatednextMatchData,
                        result: "1-0"
                    }))

                    console.log(updatednextHomeTeam);
                    console.log(updatednextMatchData);
                })
        })
        .catch(err => console.error(err));
}


const closestNextFixture = fixtures => {
    const now = new Date();
    let closestDate = Infinity;
    let closestFixture;
    fixtures.forEach(fixture => {
        const fixtureDate = new Date(fixture.start_at)
        if (fixtureDate >= now && fixtureDate < closestDate) {
            closestDate = fixtureDate;
            closestFixture = fixture
        }
        console.log("closesDate: ", closestDate)
        console.log("closestFixture: ", closestDate)
    })
    return [closestFixture];
}


const closestPreviousFixture = fixtures => {
    const now = new Date();
    let closestDate = -Infinity;
    let closestFixture;
    fixtures.forEach(fixture => {
        const fixtureDate = new Date(fixture.start_at)
        if (fixtureDate < now && fixtureDate >= closestDate) {
            closestDate = fixtureDate;
            closestFixture = fixture
        }
        console.log("closesDate: ", closestDate)
        console.log("closestFixture: ", closestDate)
    })
    return [closestFixture];
}

export { findClosestPreviousMatch, findClosestNextMatch }

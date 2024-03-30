import { useEffect, useState } from "react";
import Fixture from "../Fixture/Fixture";
import "./LiveScore.css";
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md'
import { findClosestPreviousMatch, findClosestNextMatch } from "./GameFinders";

const LiveScore = () => {

    const [nextMatchData, setNextMatchData] = useState({});
    const [nextHomeTeam, setNextHomeTeam] = useState({});
    const [nextAwayTeam, setNextAwayTeam] = useState({});
    const [lastMatchData, setLastMatchData] = useState({})
    const [lastHomeTeam, setLastHomeTeam] = useState({})
    const [lastAwayTeam, setLastAwayTeam] = useState({})

    const [showFixture, setShowFixture] = useState('next');

    const showLastMatch = () => {
        setShowFixture('last')
        findClosestPreviousMatch({
            setLastHomeTeam,
            setLastAwayTeam,
            setLastMatchData,
        })
    }

    const showNextMatch = () => {
        setShowFixture('next')
        findClosestNextMatch({
            setNextHomeTeam,
            setNextAwayTeam,
            setNextMatchData,
        })
    }

    useEffect(() => {
        console.log(nextMatchData);
    }, [nextMatchData]);

    useEffect(() => {
        showLastMatch();
    }, [])


    return (

        <section className="live-score">
            <div className="selector-controls">
                <MdNavigateBefore
                    className={"selectors " + (showFixture === "last" ? "hide-match" : "")}
                    onClick={showLastMatch}
                />
                <MdNavigateNext
                    className={"selectors " + (showFixture === "next" ? "hide-match" : "")}
                    onClick={showNextMatch}
                />
            </div>
            <div className="live-container">
                {
                    showFixture === "next" ?
                        <Fixture
                            matchData={nextMatchData}
                            homeTeam={nextHomeTeam}
                            awayTeam={nextAwayTeam}
                        /> :
                        <Fixture
                            matchData={lastMatchData}
                            homeTeam={lastHomeTeam}
                            awayTeam={lastAwayTeam}
                        />
                }
            </div>

        </section>
    )
}

export default LiveScore

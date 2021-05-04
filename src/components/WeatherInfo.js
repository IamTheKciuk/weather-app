import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { FaCloud } from "react-icons/fa";

export const WeatherInfo = (props) => {
    return (
        <Wrapper className="weather-info">
            <div className="temperature">
                20<span>&deg;</span>
            </div>
            <div className="location">Lublin</div>
            <div className="date">03.05.2021</div>
            <div className="weather-type-icon">
                <FaCloud />
            </div>
            <div className="weather-type">Cloudy</div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    color: white;
    font-family: "Poppins", sans-serif;

    position: absolute;
    bottom: 10%;
    left: 10%;

    display: grid;
    /* grid-template-columns: 1fr 1fr 1fr; */
    grid-template-rows: 2fr 1fr;
    column-gap: 2rem;
    align-items: center;
    justify-items: center;

    .temperature {
        grid-column: 1 / 2;
        grid-row: 1 / 3;

        font-size: 8rem;

        span {
            font-size: 5rem;
            vertical-align: text-top;
        }
    }

    .location {
        grid-column: 2 / 3;
        grid-row: 1 / 2;

        align-self: flex-end;
        font-size: 4.5rem;
        margin-bottom: -20px;
    }

    .date {
        grid-column: 2 / 3;
        grid-row: 2 / 3;

        align-self: flex-start;
        font-size: 1.5rem;
    }

    .weather-type-icon {
        grid-column: 3 / 4;
        grid-row: 1 / 2;

        align-self: flex-end;
        font-size: 4rem;
        margin-bottom: -20px;
    }

    .weather-type {
        grid-column: 3 / 4;
        grid-row: 2 / 3;

        align-self: flex-start;
    }
`;

const mapStateToProps = (state) => {
    return { weather: state.weather, location: state.location };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherInfo);

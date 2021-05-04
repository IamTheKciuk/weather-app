import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

// background image
import background1 from "../assets/background1.jpg";

// components
import WeatherInfo from "../components/WeatherInfo";

export const Dashboard = (props) => {
    return (
        <Wrapper className="page">
            <div className="logo">
                the.<span>weather</span>
            </div>

            <WeatherInfo></WeatherInfo>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    background: url("${background1}");
    background-size: cover;

    .logo {
        color: white;
        font-size: 2rem;
        font-family: "Poppins", sans-serif;

        position: absolute;
        top: 3rem;
        left: 10%;

        span {
            color: #fd9cad;
        }
    }
`;

const mapStateToProps = (state) => {
    return { weather: state.weather, location: state.location };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

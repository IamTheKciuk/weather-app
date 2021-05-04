import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { toggleSidebar } from "../actions";

const Sidebar = ({ isSidebarOpen, toggle }) => {
    return (
        <Wrapper>
            <div
                className={`${(isSidebarOpen && "sidebar open") || "sidebar"}`}
            >
                <div className="side-arrow">
                    <div className="arrow" onClick={() => toggle()}></div>
                </div>
                <div className="sidebar-content">
                    <div className="search-location">
                        <input type="text" placeholder="Another location" />
                        <hr className="search-box-underline" />
                        {/* TODO: MAGNIFIER ICON on the right */}
                    </div>

                    {/* weather details */}
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.aside`
    .sidebar {
        height: 100%;
        width: 500px;
        position: fixed;
        top: 0;
        right: 0;
        display: flex;

        transform: translateX(calc(100% - 40px));

        transition: all 0.3s ease;
    }

    .open {
        transform: translateX(0%);
    }

    .side-arrow {
        width: 40px;

        display: flex;
        align-items: center;
        /* clip-path: polygon(100% 0, 100% 45%, 0% 45%, 0% 55%, 100% 55%); */

        .arrow {
            width: 100%;
            height: 100px;

            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;

            background: red;
        }
    }

    .sidebar-content {
        width: 100%;
        background: grey;
    }
`;

const mapStateToProps = (state) => {
    return { isSidebarOpen: state.isSidebarOpen };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        toggle: () => dispatch(toggleSidebar()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

import React, { Component } from "react";
import { IntlProvider } from "react-intl";
import axios from "axios";
import translation from "../../translation";
import NavBar from "../../components/navbar";
import SideBar from "../../components/sidebar";
import Cards from "../../components/cards";
import Loader from "../../components/loader";
import "./home.sass";

class Home extends React.Component {
  state = {
    allData: {},
    showLoader: true,
    intervalId: 10000,
    openSideBar: false
  };

  componentDidMount() {
    this.intervalId = setInterval(
      () => this.getAllData(),
      this.state.intervalId
    );
    this.getAllData();
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  /**
   * Get All Cars Data From API
   */
  getAllData = () => {
    this.setState({ showLoader: true });
    axios
      .get("http://api.emiratesauction.com/v2/carsonline")
      .then(res => {
        this.setState({
          allData: res.data,
          showLoader: false,
          intervalId: res.data.RefreshInterval
        });
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  };

  /**
   * Open Side Bar
   */
  openSideBar = () => {
    this.setState(prevState => ({ openSideBar: !prevState.openSideBar }));
  };

  render() {
    const lang = window.language === "en" ? "en" : "ar";

    return (
      <IntlProvider locale="ar" messages={translation[lang]}>
        <div>
          <NavBar
            getAllData={this.getAllData}
            openSideBar={this.openSideBar}
            sideBarOpened={this.state.openSideBar}
          />

          <SideBar openSideBar={this.state.openSideBar} />

          <Cards allData={this.state.allData} getAllData={this.getAllData} />
          {this.state.showLoader && <Loader />}
        </div>
      </IntlProvider>
    );
  }
}

export default Home;

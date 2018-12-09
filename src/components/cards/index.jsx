import React, { Component } from "react";
import "./cards.sass";
import moment from "moment";
import _ from "lodash";
import $ from "jquery";
import { FormattedMessage } from "react-intl";
import Loader from "../loader";

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: props.allData.Cars,
      enLang: window.language.enLang,
      numOfCars: 6,
      showLoader: false
    };
  }

  componentDidMount() {
    $(window).on("scroll", () => {
      if ($(window).scrollTop() + $(window).height() === $(document).height()) {
        this.setState(prevState => ({
          showLoader: !prevState.showLoader
        }));
        this.loadMoreData();
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      cars: nextProps.allData.Cars
    });
  }

  /**
   * filtering data !!
   * @param filter
   */
  filterBy(filter) {
    switch (filter) {
      case "price":
        this.setState({
          cars: _.sortBy(this.state.cars, "AuctionInfo.currentPrice")
        });
        break;
      case "year":
        this.setState({ cars: _.sortBy(this.state.cars, "year") });
        break;
      case "endDate":
        debugger;
        this.setState({
          cars: _.sortBy(this.state.cars, "AuctionInfo.endDate")
        });
        break;
      case "bids":
        this.setState({ cars: _.sortBy(this.state.cars, "AuctionInfo.bids") });
        break;
    }
  }

  /**
   * Loading More Data!!
   */
  loadMoreData() {
    setTimeout(() => {
      this.setState(prevState => ({
        showLoader: !prevState.showLoader,
        numOfCars: prevState.numOfCars + 6
      }));
    }, 500);
  }

  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-9 content-section">
        {this.state.cars && (
          <div className="row">
            <div className="filters-btn-section col-xs-12 col-md-8 col-md-offset-4">
              <button
                className="btn btn-success refresh-btn col-xs-6 col-md-2  pull-right"
                onClick={this.props.getAllData}
              >
                <FormattedMessage id="refresh" defaultMessage="Refresh" />{" "}
                <i className="fa fa-refresh" />
              </button>
              <button
                className="btn col-xs-6 col-md-2 filters-btn pull-right"
                onClick={() => this.filterBy("price")}
              >
                <FormattedMessage id="byPrice" defaultMessage="By Price" />
              </button>
              <button
                className="btn col-xs-6 col-md-2 filters-btn  pull-right"
                onClick={() => this.filterBy("year")}
              >
                <FormattedMessage id="byYear" defaultMessage="By Year" />
              </button>
              <button
                className="btn col-xs-6 col-md-2 filters-btn  pull-right"
                onClick={() => this.filterBy("bids")}
              >
                <FormattedMessage id="byBids" defaultMessage="By Bids" />
              </button>
              <button
                className="btn col-xs-6 col-md-2 filters-btn  pull-right"
                onClick={() => this.filterBy("endDate")}
              >
                <FormattedMessage id="byEndTime" defaultMessage="By End Time" />
              </button>
            </div>
          </div>
        )}

        <div className="row">
          {this.state.cars &&
            _.range(this.state.numOfCars).map(carIndex => (
              <div
                className="col-xs-12 col-sm-6 col-md-4"
                key={`car-${this.state.cars[carIndex].carID}`}
              >
                <a
                  className="card"
                  href={`${this.state.cars[carIndex].sharingLink}${
                    this.state.cars[carIndex].carID
                  }`}
                >
                  <img
                    src={this.state.cars[carIndex].image
                      .replace("[w]", 300)
                      .replace("[h]", 300)}
                    alt="car"
                    className="card__image"
                  />
                  <div className="card__body">
                    <h3>
                      {window.language === "en"
                        ? this.state.cars[carIndex].makeEn
                        : this.state.cars[carIndex].makeAr}
                    </h3>
                    <h4>
                      {this.state.cars[carIndex].AuctionInfo.currentPrice}{" "}
                      <sup>
                        {window.language === "en"
                          ? this.state.cars[carIndex].AuctionInfo.currencyEn
                          : this.state.cars[carIndex].AuctionInfo.currencyAr}
                      </sup>
                    </h4>
                  </div>
                  <div className="card__footer">
                    <div className="card__item">
                      <i className="fa fa-suitcase" />
                      <p>{this.state.cars[carIndex].AuctionInfo.lot}</p>
                    </div>
                    <div className="card__item">
                      <i className="fa fa-heart-o" />
                      <p>{this.state.cars[carIndex].AuctionInfo.bids}</p>
                    </div>
                    <div className="card__item">
                      <i className="fa fa-camera" />
                      <p>
                        {/*{moment(this.state.cars[carIndex].AuctionInfo.endDate)}*/}
                      </p>
                    </div>
                  </div>
                  <i
                    className="fa fa-heart-o card__like"
                    onClick={e => e.preventDefault()}
                  />
                </a>
              </div>
            ))}
        </div>
        {this.state.showLoader && <Loader />}
      </div>
    );
  }
}

export default Cards;

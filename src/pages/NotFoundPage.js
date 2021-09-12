import React from "react";
import MainWrapper from "../components/MainWrapper";
import { FcInfo } from "react-icons/fc";
import NavigationContext from "../context/NavigationContext";

class NotFoundPage extends React.Component {
  static contextType = NavigationContext;

  componentDidMount() {
    this.context.setCurrentPage(this.props.location.pathname);
    this.context.setHeaderOptions({
      title: "Not found",
    });
  }

  render() {
    return (
      <MainWrapper>
        <div className="h-full flex justify-center items-center gap-2 bg-skin-base">
          <FcInfo size="2rem" />
          <p className="text-skin-base text-md">
            Not found or removed from this location
          </p>
        </div>
      </MainWrapper>
    );
  }
}

export default NotFoundPage;

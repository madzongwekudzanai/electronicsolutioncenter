import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import SliderTop from "../layout/SliderTop";
import Blog from "../blog/Blog";
import AboutUs from "../about/AboutUs";
import OurService from "../service/OurService";
import BlogDetail from "../blog/BlogDetail";
import ContactUs from "../contact/ContactUs";
import Success from "../layout/Success";
import NotFound from "../layout/NotFound";

const Routes = () => {
  return (
    <Fragment>
      <SliderTop />
      <Switch>
        <Route exact component={Blog} path="/blog" />
        <Route exact component={AboutUs} path="/about" />
        <Route exact component={OurService} path="/service" />
        <Route exact component={ContactUs} path="/contact" />
        <Route exact component={BlogDetail} path="/blog/:id" />
        <Route exact component={Success} path="/auth/:token" />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  );
};

export default Routes;

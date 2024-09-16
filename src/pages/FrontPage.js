import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductCards from '../components/FrontPage/ProductCards';
import SliderBanner from '../components/FrontPage/SliderBanner';
import ArticleCards from '../components/FrontPage/ArticleCards';
import Carousel from '../components/FrontPage/Carousel';
import CarouselContents from '../components/FrontPage/CarouselContents';
import ProductCard from '../components/FrontPage/ProductCard';
import Brand from '../components/FrontPage/Brand';

import datas from '../test/data/ArticleCard.json';
import Contents from '../test/data/Business.json';
import ProductsRWD from '../components/FrontPage/ProductsRWD';
import axios from 'axios';

function arrayConvert(array, n) {
  // code
  let ans = [];
  let subAns = [];
  array.forEach((element, i) => {
    subAns.push(element);
    if ((i + 1) % n === 0) {
      ans.push(subAns);
      subAns = [];
    } else if (i + 1 === array.length) {
      ans.push(subAns);
    }
  });
  return ans;
}

class FrontPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: window.matchMedia('(min-width: 768px)').matches,
      Productdatas: [],
      Branddatas: [],
    };
  }
  componentDidMount() {
    const handler = (e) => this.setState({ matches: e.matches });
    window.matchMedia('(min-width: 768px)').addEventListener('change', handler);
    const numberOfShow = 4;
    axios.get('http://localhost:3003/api/front/product').then((res) => {
      const len = res.data.length;
      // console.log(res.data.slice(len % numberOfShow));
      this.setState({
        Productdatas: arrayConvert(
          res.data.slice(len % numberOfShow),
          numberOfShow
        ),
      });
    });
    axios.get('http://localhost:3003/api/front/brand').then((res) => {
      const len = res.data.length;
      // console.log(arrayConvert(res.data, 4));
      this.setState({
        Branddatas: arrayConvert(
          res.data.slice(len % numberOfShow),
          numberOfShow
        ),
      });
    });
  }
  render() {
    let product = (
      <ProductsRWD
        datas={this.state.Productdatas}
        Comp={ProductCard}
        on_phone={!this.state.matches}
      />
    );
    let brand = (
      <ProductsRWD
        datas={this.state.Branddatas}
        Comp={Brand}
        on_phone={!this.state.matches}
      />
    );
    if (this.state.matches) {
      product = (
        <Carousel key_="test1">
          <ProductCards datas={this.state.Productdatas} />
        </Carousel>
      );
      brand = (
        <Carousel key_="test2">
          <CarouselContents datas={this.state.Branddatas} />
        </Carousel>
      );
    }
    return (
      <div>
        <SliderBanner />
        <h2 className="front_h2">
          <Link to="/product">質感商品</Link>
        </h2>
        {product}
        <h2 className="front_h2">
          <Link to="/Brand">精選品牌</Link>
        </h2>
        {brand}
        <ArticleCards datas={datas} />
      </div>
    );
  }
}

export default FrontPage;

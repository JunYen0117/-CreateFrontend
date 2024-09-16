import { Link } from 'react-router-dom';
import HeartArticle from './HeartArticle';
import { useLogin } from '../../utils/useLogin';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/config';

function ExhibitionExploreCards(props) {
  const { exhibitions } = props;
  const { level, setLevel } = props;
  const { area, setArea } = props;
  const { date, setDate } = props;
  const { user } = useLogin();

  return (
    <>
      <div className="d-flex justify-content-center">
        <select
          className="m-3 "
          defaultValue={'DEFAULT'}
          onChange={(e) => {
            setArea(e.target.value);
          }}
        >
          <option value="DEFAULT" disabled hidden>
            選擇地區
          </option>
          <option value="">全部地區</option>
          <option value="北部">北部</option>
          <option value="中部">中部</option>
          <option value="南部">南部</option>
        </select>
        <select
          className="m-3 "
          defaultValue={'DEFAULT'}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        >
          <option value="DEFAULT" disabled hidden>
            選擇時間
          </option>
          <option value="">全部時間</option>
          <option value="1">近一個月</option>
          <option value="2">近兩個月</option>
          <option value="3">近三個月</option>
        </select>
        <select
          className="m-3 "
          defaultValue={'DEFAULT'}
          onChange={(e) => {
            setLevel(e.target.value);
          }}
        >
          <option value="DEFAULT" disabled hidden>
            選擇價錢
          </option>
          <option value="">全部價錢</option>
          <option value="1">150以內</option>
          <option value="2">150 ~ 300</option>
          <option value="3">300以上</option>
        </select>
      </div>

      <div className="card-scroll">
        {exhibitions.map((exhibition, index) => {
          return (
            <div key={exhibition.id} className="exhibition_card">
              <HeartArticle exhibitionId={exhibition.id} />
              <Link to={`/exhibition/${exhibition.id}`}>
                <div className="d-flex ">
                  <div className="img-date">
                    <div className="exhibition_img ">
                      <img
                        src={`http://localhost:3003/images/exhibition/${exhibition.exhibition_img}`}
                        alt="..."
                      />
                    </div>
                    <div className="date">
                      <div>
                        {exhibition.start_date} - {exhibition.end_date}
                      </div>
                    </div>
                  </div>
                  <div className="mx-3 exhibition_text">
                    <h2 className="">{exhibition.exhibition_name}</h2>

                    <div className="line" />
                    <p
                      dangerouslySetInnerHTML={{
                        __html: `${exhibition.exhibition_intro}`,
                      }}
                    ></p>
                    <div className="">
                      <div className="d-flex justify-content-between city">
                        <div>{exhibition.city}</div>
                        <div>NT{exhibition.exhibition_price}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default ExhibitionExploreCards;

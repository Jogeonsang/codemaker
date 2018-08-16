import React, { Component } from 'react';

import classNames from "classnames/bind";
import style from "./App.scss";

const cx = classNames.bind(style);
const moduleName = "CodeMaker";

class CodeMaker extends Component {
  
    hanldeSubmitData = () => {
      
    }
   
  render() {
    return (
      <div>
        <div className={cx(`${moduleName}`)}>
        <h1>PROMOCODE MAKER</h1>
        <form>
          <div className={cx(`${moduleName}-codeName`)}>
            <h3>코드명</h3>
            <div className={cx(`${moduleName}-codeName-input`)}>
              <label>
                <input
                  type="text"
                  name="kor"
                  placeholder="ex)쿠폰의 이름을 작성해주세요!"
                  autoFocus
                  required
                />
              </label>
            </div>
          </div>
          <div className={cx(`${moduleName}-codeEvent`)}>
            <h3>할인</h3>
            <div className={cx(`${moduleName}-codeEvent-input`)}>
              <label>
                {" "}
                <input
                  type="text"
                  placeholder="ex) 포인트를 얼마나 지급할것인지 작성해주세요."
                  required
                />
              </label>
            </div>
          </div>
          <div className={cx(`${moduleName}-codeType`)}>
            <div className={cx(`${moduleName}-codeType-wrapper`)}>
              <label>
                <h3>쿠폰타입</h3>
                <select>
                  <option>선택하세요</option>
                  <option value="SKT">SKT</option>
                  <option value="LG">LG</option>
                  <option value="배민">배민</option>
                  <option value="플레이팅">플레이팅</option>
                  <option value="에피케이터스">에피케이터스</option>
                </select>
              </label>
            </div>
          </div>
          <div className={cx(`${moduleName}-codeisOnOff`)}>
            <h3>쿠폰 사용 횟수</h3>
            <textarea
              type="text"
              placeholder="ex) 쿠폰의 사용가능 횟수를 정의해주세요 1, 10, 100, 1000 "
              required
            />
          </div>
          <div className={cx(`${moduleName}-daliyMaximumUsing`)}>
            <label>
              <h3>하루 최대 사용가능 횟수</h3>
              <textarea
                type="text"
                name="daliyMaximumUsing"
                placeholder="ex) 해당 쿠폰이 하루 몇번 사용 가능한지 정의해주세요 "
                required
              />
            </label>
          </div>
          <div className={cx(`${moduleName}-ButtonWrapper`)}>
            <button
              className={cx(`${moduleName}-ButtonWrapper-button`)}
              type="submit"
            >
              확인
            </button>
          </div>
        </form>
      </div>
      </div>
    );
  }
}

export default CodeMaker;

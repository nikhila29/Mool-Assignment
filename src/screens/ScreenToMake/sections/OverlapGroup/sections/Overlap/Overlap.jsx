import React from "react";
import { ChevronRight1 } from "../../../../../../icons/ChevronRight1";
import { Edit02 } from "../../../../../../icons/Edit02";
import { InfoCircle1 } from "../../../../../../icons/InfoCircle1";
import { SwitchHorizontal01 } from "../../../../../../icons/SwitchHorizontal01/SwitchHorizontal01";
import { Wallet051 } from "../../../../../../icons/Wallet051";
import styled from "styled-components";

const StyledOverlap = styled.div`
  height: 981px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1512px;

  & .rectangle {
    border: 1px solid;
    border-color: #d9d9db;
    height: 1512px;
    left: 716px;
    position: absolute;
    top: -716px;
    transform: rotate(-90deg);
    width: 80px;
  }

  & .rectangle-2 {
    background-color: #f4f5f9;
    height: 104px;
    left: 160px;
    position: absolute;
    top: 494px;
    width: 1192px;
  }

  & .info-circle {
    height: 20px !important;
    left: 200px !important;
    position: absolute !important;
    top: 550px !important;
    width: 20px !important;
  }

  & .group-2 {
    height: 64px;
    left: 200px;
    position: absolute;
    top: 286px;
    width: 559px;
  }

  & .text-wrapper {
    color: #344054;
    font-family: "Inter", Helvetica;
    font-size: 24px;
    font-weight: 700;
    left: 0;
    letter-spacing: 0;
    line-height: 32px;
    position: absolute;
    top: 0;
    white-space: nowrap;
  }

  & .upload-proof-for-the {
    color: transparent;
    font-family: "Inter", Helvetica;
    font-size: 16px;
    font-weight: 500;
    left: 0;
    letter-spacing: 0;
    line-height: 24px;
    position: absolute;
    top: 40px;
    white-space: nowrap;
  }

  & .span {
    color: #667085;
  }

  & .text-wrapper-2 {
    color: #344054;
  }

  & .mask-group {
    height: 104px;
    left: 160px;
    position: absolute;
    top: 494px;
    width: 1192px;
  }

  & .p {
    color: #10aa64;
    font-family: "Inter", Helvetica;
    font-size: 14px;
    font-weight: 500;
    left: 230px;
    letter-spacing: 0;
    line-height: 20px;
    position: absolute;
    top: 545px;
    width: 480px;
  }

  & .group-3 {
    height: 24px;
    left: 200px;
    position: absolute;
    top: 510px;
    width: 221px;
  }

  & .button-base-wrapper {
    all: unset;
    align-items: flex-start;
    box-sizing: border-box;
    display: inline-flex;
    left: 136px;
    position: absolute;
    top: 2px;
  }

  & .button-base-2 {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 8px;
    justify-content: center;
    position: relative;
  }

  & .switch-horizontal {
    height: 20px !important;
    position: relative !important;
    width: 20px !important;
  }

  & .text-2 {
    color: #405cd2;
    font-family: var(--text-sm-semibold-font-family);
    font-size: var(--text-sm-semibold-font-size);
    font-style: var(--text-sm-semibold-font-style);
    font-weight: var(--text-sm-semibold-font-weight);
    letter-spacing: var(--text-sm-semibold-letter-spacing);
    line-height: var(--text-sm-semibold-line-height);
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .overlap-group-2 {
    height: 24px;
    left: 0;
    position: absolute;
    top: 0;
    width: 124px;
  }

  & .text-wrapper-3 {
    color: #667085;
    font-family: "Inter", Helvetica;
    font-size: 16px;
    font-weight: 500;
    left: 0;
    letter-spacing: 0;
    line-height: 24px;
    position: absolute;
    top: 0;
    white-space: nowrap;
  }

  & .text-wrapper-4 {
    color: #344054;
    font-family: "Inter", Helvetica;
    font-size: 16px;
    font-weight: 600;
    left: 97px;
    letter-spacing: 0;
    line-height: 24px;
    position: absolute;
    top: 0;
    white-space: nowrap;
  }

  & .rectangle-3 {
    background-color: #faeceb;
    height: 80px;
    left: 160px;
    position: absolute;
    top: 184px;
    width: 1171px;
  }

  & .img {
    height: 80px;
    left: 160px;
    position: absolute;
    top: 184px;
    width: 1171px;
  }

  & .text-wrapper-5 {
    color: #96302a;
    font-family: "Inter", Helvetica;
    font-size: 18px;
    font-weight: 700;
    left: 296px;
    letter-spacing: 0;
    line-height: 24px;
    position: absolute;
    top: 199px;
    white-space: nowrap;
  }

  & .text-wrapper-6 {
    color: #c84038;
    font-family: "Inter", Helvetica;
    font-size: 16px;
    font-weight: 500;
    left: 296px;
    letter-spacing: 0;
    line-height: 16px;
    position: absolute;
    top: 229px;
    white-space: nowrap;
  }

  & .rectangle-4 {
    background-color: #ffffff;
    border: 1px solid;
    border-color: #e6e8ee;
    border-radius: 6px;
    height: 304px;
    left: 160px;
    position: absolute;
    top: 677px;
    width: 1192px;
  }

  & .rectangle-5 {
    background-color: #f4f5f9;
    border-radius: 6px;
    height: 64px;
    left: 160px;
    position: absolute;
    top: 656px;
    width: 1192px;
  }

  & .chevron-right {
    height: 24px !important;
    left: 1292px !important;
    position: absolute !important;
    top: 676px !important;
    width: 26px !important;
  }

  & .text-wrapper-7 {
    color: #344054;
    font-family: "Inter", Helvetica;
    font-size: 18px;
    font-weight: 700;
    left: 220px;
    letter-spacing: 0;
    line-height: 24px;
    position: absolute;
    top: 675px;
    width: 275px;
  }

  & .text-wrapper-8 {
    color: #667085;
    font-family: "Inter", Helvetica;
    font-size: 14px;
    font-weight: 500;
    left: 186px;
    letter-spacing: 0;
    line-height: 24px;
    position: absolute;
    top: 790px;
    white-space: nowrap;
  }

  & .text-wrapper-9 {
    color: #667085;
    font-family: "Inter", Helvetica;
    font-size: 14px;
    font-weight: 500;
    left: 186px;
    letter-spacing: 0;
    line-height: 24px;
    position: absolute;
    top: 735px;
    width: 32px;
  }

  & .line {
    height: 1px;
    left: 160px;
    object-fit: cover;
    position: absolute;
    top: 767px;
    width: 1192px;
  }

  & .text-wrapper-10 {
    color: #667085;
    font-family: "Inter", Helvetica;
    font-size: 14px;
    font-weight: 500;
    left: 186px;
    letter-spacing: 0;
    line-height: 24px;
    position: absolute;
    top: 854px;
    width: 311px;
  }

  & .wallet {
    height: 24px !important;
    left: 186px !important;
    position: absolute !important;
    top: 676px !important;
    width: 26px !important;
  }

  & .text-wrapper-11 {
    color: #667085;
    font-family: "Inter", Helvetica;
    font-size: 14px;
    font-weight: 500;
    left: 1160px;
    letter-spacing: 0;
    line-height: 24px;
    position: absolute;
    text-align: center;
    top: 735px;
    width: 118px;
  }

  & .group-4 {
    height: 24px;
    left: 1177px;
    position: absolute;
    top: 790px;
    width: 83px;
  }

  & .text-wrapper-12 {
    color: #344054;
    font-family: "Inter", Helvetica;
    font-size: 14px;
    font-weight: 500;
    left: 0;
    letter-spacing: 0;
    line-height: 24px;
    position: absolute;
    text-align: right;
    top: 0;
    width: 51px;
  }

  & .edit {
    height: 20px !important;
    left: 60px !important;
    position: absolute !important;
    top: 0 !important;
    width: 21px !important;
  }

  & .group-5 {
    height: 24px;
    left: 1197px;
    position: absolute;
    top: 850px;
    width: 64px;
  }

  & .text-wrapper-13 {
    color: #344054;
    font-family: "Inter", Helvetica;
    font-size: 14px;
    font-weight: 500;
    left: 0;
    letter-spacing: 0;
    line-height: 24px;
    position: absolute;
    text-align: center;
    top: 0;
    width: 14px;
  }

  & .edit-02 {
    height: 20px !important;
    left: 41px !important;
    position: absolute !important;
    top: 1px !important;
    width: 21px !important;
  }

  & .text-wrapper-14 {
    color: #667085;
    font-family: "Inter", Helvetica;
    font-size: 14px;
    font-weight: 500;
    left: 186px;
    letter-spacing: 0;
    line-height: 24px;
    position: absolute;
    top: 912px;
    width: 311px;
  }

  & .group-6 {
    height: 24px;
    left: 1197px;
    position: absolute;
    top: 913px;
    width: 64px;
  }
`;

export const Overlap = () => {
  return (
    <StyledOverlap>
      <div className="rectangle" />
      <div className="rectangle-2" />
      <InfoCircle1 className="info-circle" />
      <div className="group-2">
        <div className="text-wrapper">Declaration</div>
        <p className="upload-proof-for-the">
          <span className="span">Upload proof for the declarations that you have done for the </span>
          <span className="text-wrapper-2">FY 2022-23</span>
        </p>
      </div>
      <img className="mask-group" alt="Mask group" src="/img/mask-group-1.png" />
      <p className="p">
        Considering your salary structure we feel that Old Regime suits you the best. Although you can move to other tax
        regime if you want
      </p>
      <div className="group-3">
        <button className="button-base-wrapper">
          <div className="button-base-2">
            <SwitchHorizontal01 className="switch-horizontal" color="#405CD2" />
            <div className="text-2">Change</div>
          </div>
        </button>
        <div className="overlap-group-2">
          <div className="text-wrapper-3">Tax Regime :</div>
          <div className="text-wrapper-4">Old</div>
        </div>
      </div>
      <div className="rectangle-3" />
      <img className="img" alt="Mask group" src="/img/mask-group-2.png" />
      <div className="text-wrapper-5">Amount Not Declared</div>
      <p className="text-wrapper-6">You will miss out on lot of tax benifits</p>
      <div className="rectangle-4" />
      <div className="rectangle-5" />
      <ChevronRight1 className="chevron-right" color="#667085" />
      <div className="text-wrapper-7">Section 80C</div>
      <p className="text-wrapper-8">5 Years of Fixed Deposit in Scheduled Bank</p>
      <div className="text-wrapper-9">Item</div>
      <img className="line" alt="Line" src="/img/line-6.svg" />
      <div className="text-wrapper-10">Children Tuition Fees</div>
      <Wallet051 className="wallet" />
      <div className="text-wrapper-11">Amount ( in INR)</div>
      <div className="group-4">
        <div className="text-wrapper-12">500</div>
        <Edit02 className="edit" color="#405CD2" />
      </div>
      <div className="group-5">
        <div className="text-wrapper-13">--</div>
        <Edit02 className="edit-02" color="#405CD2" />
      </div>
      <p className="text-wrapper-14">Deposit in National Savings Certificate</p>
      <div className="group-6">
        <div className="text-wrapper-13">--</div>
        <Edit02 className="edit-02" color="#405CD2" />
      </div>
    </StyledOverlap>
  );
};
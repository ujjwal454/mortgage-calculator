"use client";
import React from "react";
import InputContainer from "./componnet/input/input-container";
import RadioInput from "./componnet/radio/radio";
import PrimaryButton from "./componnet/button/btn-primary";

function Home() {
  return (
    <div className="container">
      <header className="header">
        <h1>Mortgage Calculator</h1>
        <a href="">clear all</a>
      </header>
      <section className="form">
        <section className="input-group">
          <InputContainer
            inputLabel={"Mortgage Amount"}
            inputUnit="£"
            inputValue={0}
            onChangeText={(val) => console.log(val)}
          />
          <InputContainer
            inputLabel={"Mortgage Term"}
            inputUnit="years"
            inputValue={0}
            onChangeText={(val) => console.log(val)}
          />
          <InputContainer
            inputLabel={"Interest Rate"}
            inputUnit="%"
            inputValue={0}
            onChangeText={(val) => console.log(val)}
          />
        </section>
        <section className="radio-group">
          <h2>Mortgage Type</h2>
          <RadioInput isSelected={false} label="Repayment" />
          <RadioInput isSelected={false} label="Interest Only" />
        </section>
        <PrimaryButton
          label="Calculate Repayment"
          onClick={() => {
            console.log("clicked");
          }}
        />
      </section>
    </div>
  );
}

export default Home;

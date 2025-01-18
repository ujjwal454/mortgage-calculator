"use client";
import React from "react";

import { useForm } from "react-hook-form";

import { MortgageInputs } from "./types/mortgage-inputs";
import InputContainer from "./componnet/input/input-container";
import RadioInput from "./componnet/radio/radio";
import PrimaryButton from "./componnet/button/btn-primary";

function Home() {
  const {
    setValue,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<MortgageInputs>();

  const handleClear = (e: React.FormEvent) => {
    e.preventDefault();
    reset();
  };

  const onSubmit = (data: MortgageInputs) => {};

  return (
    <div className="container">
      <header className="header">
        <h1>Mortgage Calculator</h1>
        <a onClick={handleClear}>clear all</a>
      </header>
      <section className="form">
        <section className="input-group">
          <InputContainer
            inputLabel={"Mortgage Amount"}
            inputUnit="£"
            inputValue={watch("amount")}
            onChangeText={(val) => setValue("amount", +val)}
            errorMessage={errors.amount}
          />
          <InputContainer
            inputLabel={"Mortgage Term"}
            inputUnit="years"
            inputValue={watch("term")}
            onChangeText={(val) => setValue("term", +val)}
          />
          <InputContainer
            inputLabel={"Interest Rate"}
            inputUnit="%"
            inputValue={watch("interest")}
            onChangeText={(val) => setValue("interest", +val)}
          />
        </section>
        <section className="radio-group">
          <h2>Mortgage Type</h2>
          <RadioInput
            isSelected={watch("type") === "Repayment"}
            label="Repayment"
            onClick={() => setValue("type", "Repayment")}
          />
          <RadioInput
            isSelected={watch("type") === "Interest Only"}
            label="Interest Only"
            onClick={() => setValue("type", "Interest Only")}
          />
        </section>
        <PrimaryButton
          label="Calculate Repayment"
          onClick={handleSubmit(onSubmit)}
        />
      </section>
    </div>
  );
}

export default Home;

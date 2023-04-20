import React from "react";

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  precentPositive,
}) =>{
  return (
    <div>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <p>Positive feedback: {precentPositive}%</p>
  </div>
  )
}
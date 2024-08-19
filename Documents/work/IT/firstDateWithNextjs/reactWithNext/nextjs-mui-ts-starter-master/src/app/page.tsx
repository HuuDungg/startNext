import * as React from 'react';
import MainSlider from '@/components/main/main.slider';

export default async function HomePage() {
  const res = await fetch("http://127.0.0.1:8080/subject/getAll", {
    method: "GET"
  })
  console.log("check data: ", res.json())
  return (
    <>
      <MainSlider />
      <MainSlider />
      <MainSlider />
    </>
  );
}

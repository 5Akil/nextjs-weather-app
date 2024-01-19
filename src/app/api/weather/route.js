import { NextRequest, NextResponse } from "next/server";

//localhost:3000/api/weather
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const address = searchParams.get("address");
  const latitude = searchParams.get("lat");
  const longitude = searchParams.get("lon");
  let url = "";
  if (address) {
    url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      address +
      "&appid=" +
      "c7c4124654bb14b0646cfb8a2a24ac76";
  } else {
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=c7c4124654bb14b0646cfb8a2a24ac76`;
  }
  console.log(url);
  const res = await fetch(url);

  const data = await res.json();
  return NextResponse.json({ data });
}

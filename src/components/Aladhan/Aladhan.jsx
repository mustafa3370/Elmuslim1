import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import AladhanCss from './Aladhan.module.css';
function Aladhan() {

const[adan,Setadan]=useState([])

async function getAdan(){
  const {data} = await axios.get("https://api.aladhan.com/v1/timingsByCity/:date?",{
      params:{
        city:"EG-C",
        country:"EG"
      }
    });
    Setadan(data.data.timings)
}
useEffect(function() {
    getAdan()
  },[])

    return <>
    <section className={AladhanCss.aladhan}>
    <div className={AladhanCss.title}>
        <div className={AladhanCss.text}>Aladan</div>
        </div>
    <div className="container" className={AladhanCss.back}>
        <div className="row">
            <div className="col-md-4">
                <div className={AladhanCss.test}>
                    <img src={require("../../photos/Untitled-1.png")} alt="" className="w-100"/>
                    <div className={AladhanCss.content}>
                        <h1>Fajr</h1>
                        <h3>{adan.Fajr}</h3>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className={AladhanCss.test}>
                    <img src={require("../../photos/Untitled-1.png")} alt="" className="w-100"/>
                    <div className={AladhanCss.content}>
                        <h1>Dhuhr</h1>
                        <h3>{adan.Dhuhr}</h3>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className={AladhanCss.test}>
                    <img src={require("../../photos/Untitled-1.png")} alt="" className="w-100"/>
                    <div className={AladhanCss.content}>
                        <h1>Asr</h1>
                        <h3>{adan.Asr}</h3>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className={AladhanCss.test}>
                    <img src={require("../../photos/Untitled-1.png")} alt="" className="w-100"/>
                    <div className={AladhanCss.content}>
                        <h1>Maghrib</h1>
                        <h3>{adan.Maghrib}</h3>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className={AladhanCss.test}>
                    <img src={require("../../photos/Untitled-1.png")} alt="" className="w-100"/>
                    <div className={AladhanCss.content}>
                        <h1>Isha</h1>
                        <h3>{adan.Isha}</h3>
                    </div>
                </div>
            </div>   
        </div>
    </div>
    </section>
    <section className={AladhanCss.mosque}>
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <img src={require("../../photos/united-arab-emirates--abu-dhabi--sheikh-zayed-grand-mosque-on-cloudy-day-528823395-59935f739abed50010c96277.webp")} alt="" className={AladhanCss.photo} />
            </div>
            <div className="col-md-6">
        <div className={AladhanCss.text}>
          <h2>Ramdan Kareem</h2>
         
        </div>
      </div>
        </div>
    </div>
    </section>
    </>
}

export default Aladhan

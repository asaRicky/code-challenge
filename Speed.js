const speed = 80;
//declare the speed limit
     const speedlimit = 70;
     const KmPerDemeritPoint = 5;
     if (speed <= speedlimit) {
        console.log("ok");
     }//so if speed exceeds 70km/hr it should output the demerit points
     else {
        const demeritPoints = Math.floor((speed-speedlimit) / KmPerDemeritPoint);
        console.log(`Demerit Points: ${demeritPoints}`);
     }if (demeritPoints > 12) {
        console.log("Lincense suspended")
     }//if the demerit points exceed 12 one should get the lincense suspended

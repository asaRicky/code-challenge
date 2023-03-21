// program that takes as inputs the speed of a car
const speed = 80
//Declares the speed limit of a car
               const speedlimit = 70;
               const kmPerDemeritPoint = 5;
               if (speed <= speedlimit) {
                console.log ("Ok")
               }//if the speed exceeds speed limit it should output demerit points
               else {
                const demeritpoints = Math.floor((speed - speedlimit)/ kmPerDemeritPoint);
                console.log (` Demerit points: ${demeritpoints}`);
               }if (demeritpoints > 12) {
                console.log('License suspended')
               }//if the demeritpoints exceed 12 one's License is suspended




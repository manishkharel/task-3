function shortestTime(n, m, a, b, c, d) {
    // john is already at 0 floor
    if (n === 0) {
      return 0;
    } else if (n > m){
        //John go downstairs by using the elevator
        let case1 = a * (n-m) + 2 * b + c + a * n;
        //John go downstairs by walking
        let case2 = d * n;
        //John walks down m floor and takes the elevator from there.
        let case3 = d * (n-m) + 2 * b +c + a * m;
      
        if (case1<=case2 && case1<=case3){
        return case1;
        }
        else if(case2<=case1 && case2<=case3){
        return case2;
        }
        else if (case3<=case1 && case3<=case2){
        return case3;
        }
    }
    else if (n < m){
        //John go downstairs by using the elevator
        let case1 = a* (m-n) + 2 * b + c + a*n;
        //John go downstairs by walking
        let case2 = d * n;
        
        if (case1<= case2){
          return case1;
        }
        else{
          return case2;
        }
    }
    else if (n === m){
        //John go downstairs by using the elevator
        let case1= n * a + 2 * b + c;
        //John go downstairs by walking
        let case2 =d * n;

        if(case1 < case2){
            return case1;
        }
        else{
            return case2;
        }
    }
}
// CASES
// For n = 4, m = 5 and speeds = [1,2,3,10], the output should be 12.
// John go downstairs by using the elevator:
// 1 + 2 + 3 + 4 + 2 = 12
console.log(shortestTime(4, 5, 1, 2, 3, 10));

// For n = 0, m = 5 and speeds = [1,2,3,10], the output should be 0.
// John is already at 0 floor, so the output is 0.
console.log(shortestTime(0, 5, 1, 2, 3, 10));

// For n = 4, m = 3 and speeds = [2,3,4,5], the output should be 20.
// John go downstairs by walking:
// 5 x 4 = 20
console.log(shortestTime(4, 3, 2, 3, 4, 5));

// For n = 7, m = 6 and speeds = [3,1,1,4] the output should be 25.
// John walks down 1 floor and takes the elevator from there.
// 1×4 + 1 + 1 + 6×3 + 1 = 25
// Pure walk would have taken 7×4 = 28; pure elevator would have taken 1×3 +
// 1 + 1 + 7×3 + 1 = 27.
console.log(shortestTime(7, 6, 3, 1, 1, 4));

//EXTRA CASES
//For n=m=5 and speeds = [1,2,3,10], the output should be 12.By the stairs the output is 50.
//john takes the elevator.
console.log(shortestTime(5,5,1,2,3,10));

//For n = 3, m = 5 and speeds = [2,3,4,10], the output should be 20.By the stairs the output is 30.
//john takes the elevator.
console.log(shortestTime(3,5,2,3,4,10));
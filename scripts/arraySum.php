<?php
    /**
     * This is the only script who's i can't run on this application because written in PHP, 
     * but you can check the code, and run on your PC.
     * @return integer the sum of integers whose index is between start and end
    */

    function calc($array, $start, $end) {
        $sum = 0;

        /* check any wrong input */
        if ($start < 0 || $end > count($array) -1 || $start > $end || $end < $start) {
            return $sum;
        };
      
        /* 
        Do a loop between the $start and the $end inputs 
        summing up the values saving in $sum variable 
        */
        for ($i = $start; $i <= $end; $i++) {
            $sum += $array[$i];
        };
      
        /* return the total */
        return $sum;
    }

    var_dump( calc([1, 2, 3, 4, 5, 6], 2, 4 ));
?>
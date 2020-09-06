<?php

namespace App\Service;

use Exception;

class Utils
{
  public function CsvToArray($csvFile)
  {
    $csv = explode(PHP_EOL, $csvFile);
    $aContent = array_splice($csv, 1);
    $aNamedArray = [];

    foreach ($aContent as $item) {
      $item = explode(",", $item);
      if (count($item) > 1) {
        $newItem = array(
          "id" => rand(1, getrandmax()),
          "Order" => $item[0],
          "Line" => $item[1],
          "Style" => $item[2],
          "Color" => $item[3],
          "Description" => $item[4],
          "Ship to Code" => $item[5],
          "Client" => $item[6],
          "XS" => $item[7],
          "S" => $item[8],
          "M" => $item[9],
          "L" => $item[10],
          "XL" => $item[11],
          "XXL" => $item[12],
          "3XL" => $item[13],
          "4XL" => $item[14]
        );
        array_push($aNamedArray, $newItem);
      }
    }
    return json_encode($aNamedArray);
  }
}

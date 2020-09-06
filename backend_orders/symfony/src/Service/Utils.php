<?php

namespace App\Service;

class Utils
{
  public function CsvToArray($csvFile)
  {
    $csv = explode(PHP_EOL, $csvFile);
    $array = array();
    foreach ($csv as $line) {
      $array[] = str_getcsv($line);
    }

    return $array;
  }
}

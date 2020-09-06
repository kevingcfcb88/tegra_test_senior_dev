<?php

namespace App\Service;

use Exception;

class Utils
{
  public function CsvToArray($csvFile)
  {
    $csv = explode(PHP_EOL, $csvFile);
    $array = array();
    foreach ($csv as $line) {
      if (strlen($line) > 0) {
        $array[] = str_getcsv($line);
      }
    }

    //With array_splice the header is removed
    return array_splice($array, 1);
  }
}

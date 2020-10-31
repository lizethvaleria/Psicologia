<?php
	
	
	require_once('./Herramientas/tcpdf/tcpdf.php');
	require_once('./Herramientas/fpdi/fpdi.php');

	$nombre=$_GET['nombre'];

    $coor = array(
      array(0,0),
      array(68,200), // Nombre 
      array(186,495), // Nombre 
    );


    $fecha_hoy=date("Y-m-d");
    $dia = substr($fecha_hoy,8,2);
    $mes = substr($fecha_hoy,5,2);
	$anio = substr($fecha_hoy,0,4);
                    
    switch($mes){   
        case 1:
        $fecha_footer = $dia." de enero del ".$anio;
        break;
        case 2:
        $fecha_footer = $dia." de febrero del ".$anio;
        break;
        case 3:
        $fecha_footer = $dia." de marzo del ".$anio;
        break;
        case 4:
        $fecha_footer = $dia." de abril del ".$anio;
        break;
        case 5:
        $fecha_footer = $dia." de mayo del ".$anio;
        break;
        case 6:
        $fecha_footer = $dia." de junio del ".$anio;
        break;
        case 7:
        $fecha_footer = $dia." de julio del ".$anio;
        break;
        case 8:
        $fecha_footer = $dia." de agosto del ".$anio;
        break;
        case 9:
        $fecha_footer = $dia." de septiembre del ".$anio;
        break;
        case 10:
        $fecha_footer = $dia." de octubre del ".$anio;
        break;
        case 11:
        $fecha_footer = $dia." de noviembre del ".$anio;
        break;
        case 12:
        $fecha_footer = $dia." de diciembre del ".$anio;
        break;
        default:
        $fecha_footer = $dia." de diciembre del ".$anio;
        break;
    }    
    
    $data=array(
        $nombre,
        $fecha_footer
    );
      
	$pdf = new \FPDI('P','px','LETTER');
	$pdf->SetPrintHeader(false);
	$pdf->SetPrintFooter(false);
	
	$pdf->SetFont('helvetica', '', 26);

	$pdf->AddPage();
	$pdf->setSourceFile('./recofapsi.pdf');
	$idx = $pdf->importPage(1);
	$pdf->useTemplate($idx);
	$i=0;
	foreach($data as $val){
		if(!is_array($val)){
		  $val = array($val);
		}
		if ($i>0) {
			$pdf->SetFont('helvetica', '', 10);
		}
		foreach($val as $val2){ 
		  $c = next($coor);
		  $pdf->setXY($c[0],$c[1]);
		  $pdf->Cell(0,0,$val2);
		}
		$i++;
	}
    header("Content-type:application/pdf");
    $pdf->Output('certificado_'.$nombre.'.pdf', 'I');
	
?>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Supermercado Moderno</title>
    {{-- === Ìcones do 'FONTAWESOME' === --}}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    {{-- === Fonte 'LATO' do Google Fonts === --}}
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@200..800&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Playwrite+RO:wght@100..400&display=swap" rel="stylesheet"> 

    {{-- === Estilos 'CSS'===  --}}
        <link rel="stylesheet" href="{{asset('css/style.min.css')}}">
</head>
<body>

    @include('sessoes-min')

    <script src="{{asset('js/app.min.js')}}"></script>
</body>
</html>
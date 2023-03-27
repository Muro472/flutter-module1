import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
        colorSchemeSeed: Colors.indigo,
        useMaterial3: true,
        brightness: Brightness.light,
      ),
      darkTheme: ThemeData(
        colorSchemeSeed: Colors.blue,
        useMaterial3: true,
        brightness: Brightness.dark,
      ),
      home: const MyHomePage(title: 'Band cards'),
      debugShowCheckedModeBanner: false,
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;
  int _maxCards = 3;

  var cardImages = ['assets/m.jpeg','assets/n.jpeg','assets/o.jpeg','assets/s.jpeg'];
  var cardText = ['This is metallica','This is nirvana','This is opeth','This is slipknot'];


  void _incrementCounter() {
    setState(() {
      if(_counter >= 3) {
        _counter = 0;
      }else{
        _counter++;
      }
    });
  }

  void _unIncrementCounter() {
      setState(() {
        if(_counter <= 0) {
         _counter = 3;
        } else {
          _counter--;
        }
      });
    }

  @override
  Widget build(BuildContext context) {

    return Scaffold(
      appBar: AppBar(
 
        title: Text(widget.title),
      ),
      body: Center(

        child: Column(

          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
             ImageTextWidget(
              imageUrl: cardImages[_counter],
              text: cardText[_counter],
            ),
            Row(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children: [
      
        ElevatedButton(
          onPressed: _unIncrementCounter,
          child: Text('previous'),
        ),
        ElevatedButton(
          onPressed: _incrementCounter,
          child: Text('next'),
        ),
      ],
    ),
          ],
        ),
      ),
    );
  }
}

class ImageTextWidget extends StatelessWidget {
  final String imageUrl;
  final String text;

  ImageTextWidget({required this.imageUrl, required this.text});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(16.0),
      decoration: BoxDecoration(
        color: Colors.indigo,
        borderRadius: BorderRadius.circular(10.0),
      ),
      child:  Column(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: <Widget>[
        Image(
          image: AssetImage(imageUrl),
        ),
        SizedBox(height: 10),
        Text(
          text,
          style: TextStyle(fontSize: 20),
        ),
      ],
    ),
    );
  }
}

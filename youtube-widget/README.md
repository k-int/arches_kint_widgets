# YouTube widget

A widget that uses the String datatype to transform a YouTube URL into the embeded YouTube video player.

## Installation instructions

Copy youtube-widget.json -> project/widgets/
Copy youtube-widget.htm -> project/templates/views/components/widgets/
Copy youtube-widget.js -> project/media/js/views/components/widgets/

Register using:
```
python manage.py widget register --source project/widgets/youtube-widget.json
```

View the list of widgets using:
```
python manage.py widget list
```

Update using:
```
python manage.py widget update --source project/widgets/youtube-widget.json
```
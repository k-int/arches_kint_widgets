# Sketchfab widget

A widget that uses the String datatype to transform a sketchfab URL into the embeded Sketchfab imaging.

## Installation instructions

Copy sketchfab-widget.json -> project/widgets/
Copy sketchfab-widget.htm -> project/templates/views/components/widgets/
Copy sketchfab-widget.js -> project/media/js/views/components/widgets/
Copy sketchfab-canvas.htm -> project/templates/views/components/sketchfab/

Register using:
```
python manage.py widget register --source project/widgets/sketchfab-widget.json
```

View the list of widgets using:
```
python manage.py widget list
```

Update using:
```
python manage.py widget update --source project/widgets/sketchfab-widget.json
```
# Bosha Home Watch App

A home monitoring application with transparent security using WebRTC for peer-to-peer video streaming.

## Features

- Real-time video streaming between devices
- WebRTC peer-to-peer connection
- Socket.io signaling server
- Vercel Speed Insights integration for performance monitoring

## Installation

```bash
npm install
```

## Running the Application

```bash
npm start
```

The server will start on port 3000. Open `index.html` in your browser to access the application.

## Vercel Speed Insights

This project is configured with Vercel Speed Insights to monitor performance metrics. Speed Insights is automatically enabled when deployed to Vercel.

### Configuration

The Speed Insights tracking is integrated via:
- Vanilla JavaScript implementation in `index.html`
- Script initialization in the HTML head
- Automatic route configuration in `vercel.json`

To view metrics after deployment:
1. Deploy the project to Vercel
2. Enable Speed Insights in your Vercel dashboard
3. Access the Speed Insights tab in your project dashboard

## Deployment

Deploy to Vercel:

```bash
vercel deploy
```

## Dependencies

- `express` - Web server framework
- `socket.io` - Real-time bidirectional event-based communication
- `@vercel/speed-insights` - Performance monitoring

## License

ISC

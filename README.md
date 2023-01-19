# Tree Showcase

## Dev startup

```bash
npm start
# Once the Metro Bundler has started you can hit 'w' to run on web
```

### Using Expo Go for native testing

Download expo go from the [App Store](https://apps.apple.com/app/expo-go/id982107779)/[Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en&gl=US)

Ensure your selected device is operating on the same wireless network as your local machine and run the above startup command, then follow the in app instructions.

If the above command for starting the project does not work try the following:

```bash
npx expo start --tunnel
```

## Testing

### Unit tests

```bash
npm test
```

### E2E tests

Start up the project locally and run the following command:

```bash
npx cypress open
```

**Note:** The limitation of Cypress tests here is that it can only test our app in the browser environment. I'd recommend using storybook for testing react-native components.

## Resources

Free image assets:

- [svgrepo](https://www.svgrepo.com/)
- [icons8](https://icons8.com/)

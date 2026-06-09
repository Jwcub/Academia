# Academia
Detta projekt är en examinationsuppgift i kursen *Programmering i TypeScript* vid Mittuniversitet. Applikationen är skapad i Angular med fokus på programmeringsspråket TypeScript. 

## Grundläggande funktionalitet:
- Applikationen är skapad med Angular och TypeScript.
- Applikationen har minst två undersidor, en för att söka och visa information om kurser - och en som visar skapat ramschema.
- Komponenter och routing används.
- Fler än två services har skapats.
- Kurser kan sortera efter kurskod, poäng och ämne.
- Kurser kan filtreras utifrån kurskod och kursnamn.
- Det går att välja kurser från ämne. 
- Kurser kan läggas till i ramschema. 
- Applikationen visar hur många resultat som finns i ett urval.
- Ett ramschema går att skapa, det går inte att lägga till dublett av samma kurs.
- Ramschemat lagras i LocalStorage utan sidomladdning.
- Kurser kan raderas från ramschema.
- Webbplatsens design är genomarbetad och responsiv. 
- Koden har versionhanterats i GIT.
- Applikationen och dess källkod finns tillgänglig publikt. 

## Utökad funktionalitet:
- Användaren kan välja mellan ljust och mörkt schema.
- Paginering av kurser.
- Sidfält som visar kurser i ramschemat och uppdateras utan omladdning.
- Utökat sidor, med startsida.
- Mobilmeny i egen komponent. 

## Tillgänglig:
Applikaitonens finns tillgänglig vid: 
https://academiauni.netlify.app/ 

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# Projekt aplikacje mobilne

## Uruchamianie

Aby uruchomić projekt, zainstaluj zależności:

```bash
npm i
```

Następnie, aby uruchomić aplikację:

```bash
npm start
```

Po wciśnięciu `w` aplikacja otworzy się z wykorzystaniem przeglądarki pod adresem [http://localhost:8081](http://localhost:8081).

## Testowe API

Aby uruchomić proces z testowym API:

```bash
npm run api
```

Endpointy będą wówczas dostępne pod adresem [http://localhost:3000](http://localhost:3000).

Dostępne metody HTTP opisane są na stronie pakietu [json-server](https://www.npmjs.com/package/json-server).

> [!NOTE]  
> Definicje typów obiektów używanych przez API znajdują się w pliku [types.ts](https://github.com/kurczakooo/React-Native-Project/blob/main/src/types.ts).

#### Tworzone endpointy

| Endpoint      | Opis                         | Interfejs ([types.ts](https://github.com/kurczakooo/React-Native-Project/blob/main/src/types.ts)) |
| ------------- | ---------------------------- | ------------------------------------------------------------------------------------------------- |
| `/users`      | Użytkownicy aplikacji.       | `User`                                                                                            |
| `/muscles`    | Lista partii mięśniowych.    | `ExerciseMuscle`                                                                                  |
| `/levels`     | Kategorie trudności ćwiczeń. | `ExerciseLevel`                                                                                   |
| `/forces`     | Typy siły w ćwiczeniach.     | `ExerciseForce`                                                                                   |
| `/mechanics`  | Rodzaje mechaniki ćwiczeń.   | `ExerciseMechanic`                                                                                |
| `/exercsises` | Lista dostępnych ćwiczeń.    | `PredefinedExercise`                                                                              |

> [!TIP]  
> W pliku [**.env.development**](https://github.com/kurczakooo/React-Native-Project/blob/main/.env.development) znajduje się zmienna `EXPO_PUBLIC_DEV_API_URL`, zawierająca adres URL testowego serwera. Można ją odczytać w bezpośrednio w kodzie za pomocą `process.env.EXPO_PUBLIC_DEV_API_URL`, co pozwala uniknąć wielokrotnego wpisywania adresu URL jako tekstu podczas realizowania zapytań do API.

## Uwagi i linki

-   [JSON i obrazki z ćwiczeniami](https://github.com/yuhonas/free-exercise-db)
-   [Dokumentacja komponentów](https://callstack.github.io/react-native-paper/docs/components/ActivityIndicator)
-   [Komponenty dla Figmy](https://www.figma.com/community/file/1035203688168086460)

## O projekcie

**Temat projektu:** Aplikacja do treningu

#### Funkcjonalności:

-   logowanie, rejestracja
-   edycja danych logowania
-   śledzenie statystyk dotyczących ćwiczeń i treningów
-   przeglądanie predefiniowanych ćwiczeń
-   tworzenie treningu z gotowych ćwiczeń
-   zapisywanie treningów w kalendarzu

#### Ekrany:

1.  **Logowanie / rejestracja**

    -   formularz login/hasło
    -   przełączenie na ekran rejestracji

2.  **Ekran główny**

    -   ostanie treningi
    -   przycisk do rozpoczęcia nowego treningu

3.  **Aktualny trening**

    -   przycisk początkujący ćwiczenia
    -   wpisywanie obciążenia i ilości powtorzeń
    -   dodawanie serii ćwiczeń
    -   wynik/podsumowanie z ostatniego treningu
    -   licznik czasu treningu
    -   dodawanie zdjęcia po zakończeniu treningu
    -   odliczanie czasu odpoczynku

4.  **Wykonany trening**

    -   lista wykonanych ćwiczeń
    -   ilości serii, powtórzeń i waga
    -   czas treningu
    -   zdjęcie z treningu

5.  **Ćwiczenia**

    -   lista predefiniowanych ćwiczeń
    -   krótkie opisy (po kliknięciu)

6.  **Kalendarz**

    -   zaznaczone dni treningowe
    -   ilość tygodni treningowych pod rząd
    -   ilość dni odpoczynku

7.  **Profil ze statystykami**

    -   wykres podsumowujący czas treningów
    -   wykres pokazujący rozkład ćwiczeń na partie mięśniowe
    -   łączna ilość treningów
    -   łączny czas treninów

8.  **Ustawienia**

    -   zmiana loginu
    -   zmiana hasła
    -   zmiana motywu aplikacji
    -   wylogowanie

#### Sensory:

-   **Aparat** - dodawanie swoich zdjęć do
    śledzenia progresu

-   **Wibracje** - telefon wibruje kiedy czas
    odpoczynku podczas treningu dobiegnie końca

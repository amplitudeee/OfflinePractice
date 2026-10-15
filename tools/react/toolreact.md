Make new private project in gitlab
clone project to local machine
create html structure 
create basic css
create sample json

```
assignment/
    react-dashboard/
        public/
            covers/
        src/
            assets/
            components/
                AlbumCard.jsx*
                AlbumList.jsx*
                RequestForm.jsx*
                Pagination.jsx*
            data/
                music.json*
            utils/
                storage.js*
                validation.js*
        index.html*
        app.css*
        app.jsx*
```

Copy old files (*) into new project
commit files to git
add members to project
    Open Members settings: On the left-hand sidebar, click on Manage and select Members.
        add s.santilli as reporter
        add wheresmsn as reporter
setup vite+react project(in terminal navigate to root: cd assignment)
    npm create vite@latest react-dashboard -- --template react
        ignore existing files
    **npm run dev** will start the development server and open the app in the browser if you close it
open project in vscode
    open project in vscode web browser
        ctrl+shift+p > Open Integreated Browser





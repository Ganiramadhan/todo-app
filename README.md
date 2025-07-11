# 📝 Next.js To-Do App with CRUD and API Integration

This is a modern and responsive To-Do List web application built with Next.js, React Hooks, and vanilla CSS, providing full CRUD capabilities and integration with the JSONPlaceholder API.

🔗 Visit the live site here: https://todolist.ganipedia.xyz

---

## 🚀 Features

- ✅ Fetch tasks from [JSONPlaceholder API](https://jsonplaceholder.typicode.com/todos)
- ✅ Display incomplete and completed tasks
- ✅ Create new tasks (with validation)
- ✅ Update existing tasks
- ✅ Delete tasks
- ✅ Mark tasks as completed / undo completion
- ✅ Filter tasks by status (incomplete or complete)
- ✅ Built using **React Hooks** (`useState`, `useEffect`)
- ✅ Styled with **vanilla CSS**
- ✅ Responsive and clean UI
- ✅ Containerized with **Docker**

---

## 📦 Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [pnpm](https://pnpm.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) (3rd-party API)
- [Vanilla CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Docker](https://www.docker.com/) (optional)

---

## 🛠️ Getting Started

### 📁 Clone the Repository

```bash
git clone https://github.com/Ganiramadhan/todo-app.git
cd todo-app
```

---

### 📦 Install Dependencies

Using **pnpm**:

```bash
pnpm install
```

> Make sure `pnpm` is installed. If not, run:
> ```bash
> npm install -g pnpm
> ```

---

### ▶️ Run the Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

---

## 🐳 Docker Setup (Optional)

### 📄 Build Docker Image

```bash
docker build -t nextjs-todo-app .
```

### ▶️ Run Docker Container

```bash
docker run -p 3000:3000 nextjs-todo-app
```

Then visit: [http://localhost:3000](http://localhost:3000)

---

## 📂 Folder Structure

```
.
├── app/             # Next.js app directory
├── components/      # TaskForm, TaskList, TaskItem components
├── public/          # Static assets
├── styles/          # Global CSS
├── Dockerfile       # For deployment
├── package.json     
├── pnpm-lock.yaml   
├── README.md
```

---


## 📃 License

This project is licensed under the MIT License — feel free to use, modify, and share.

---

## 🙌 Acknowledgements

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- [Next.js Docs](https://nextjs.org/docs)
- [pnpm](https://pnpm.io/)

---

## 💬 Feedback

Feel free to open an [issue](https://github.com/Ganiramadhan/todo-app/issues) or submit a PR if you have ideas to improve the project.

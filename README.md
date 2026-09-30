# pruebaubuntu framework

Pagina web construida con Next.js, React y TypeScript para ejecutarse en una maquina virtual Ubuntu de Oracle Cloud.

## Ejecutar en local

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Ejecutar en la VM Ubuntu

Desde la VM `137.131.130.209`:

```bash
git clone https://github.com/sebastiansoto1407/pruebaubuntuframework.git
cd pruebaubuntuframework
npm install
npm run build
npm run start -- -H 0.0.0.0 -p 3000
```

La pagina quedara disponible en `http://137.131.130.209:3000`.

En Oracle Cloud, crea una regla de entrada TCP para el puerto `3000` en la lista de seguridad o NSG de la subred. Si Ubuntu usa UFW:

```bash
sudo ufw allow 3000/tcp
sudo ufw reload
```

## Mantener el proceso activo

Para una ejecucion persistente, usa PM2:

```bash
sudo npm install -g pm2
pm2 start npm --name pruebaubuntu -- run start -- -H 0.0.0.0 -p 3000
pm2 save
pm2 startup
```

## Scripts disponibles

```bash
npm run dev    # desarrollo
npm run lint   # lint
npm run build  # build de produccion
npm run start  # servidor de produccion
```
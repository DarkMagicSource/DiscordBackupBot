# Backup Bot
A Discord bot to create perioic full backups of a server.
TL;DR every 2 weeks the bot will launch a [DiscordChatExporter](https://github.com/Tyrrrz/DiscordChatExporter) process with my set of prefered settings and store the resulting backup in a dated folder. The bot mostly serves as a wrapper for that process and;
 - launching it on time
 - clearing old backups
 - hosting the backups as a webserver on port `8085`
 - and provide an interface for admins;
   - to manually launch a backup
   - get a link to the backup archive
   - and check how long until the next backup

> *NOTE: This bot is not intended for other servers without modification, source code is **only** published as an act of transparency.*
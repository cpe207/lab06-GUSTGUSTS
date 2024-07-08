[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/ptwfhEPC)
# Lab 06 : The Joy of pure TypeScript/JavaScript Part 3

### ป้อนข้อมูลนักศึกษา

รหัส นศ.:

ชื่อ-สกุล :

ให้ นศ.เขียนโปรแกรมโดยใช้ Node.js + TypeScript ตามคำสั่งของโจทย์ในข้อต่าง ๆ ตามรายละเอียดด้านล่างนี้

[คลิกเพื่อดูรายละเอียด](https://o365cmu-my.sharepoint.com/:b:/g/personal/dome_potikanond_cmu_ac_th/EUzDKZepCp9Gsj5rsqYFRLYBaG_BsNIheMRtFGcZMp96ug?e=iXKn9C)

---

### คำอธิบายเกี่ยวกับการใช้งาน TypeScript

หากในโปรเจคโฟลเดอร์ยังไม่มี `package.json` ให้ initialize project ด้วยการ**รันคำสั่งต่อไปนี้ภายในโปรเจคโฟลเดอร์**

```bash
$ npm init -y
```

หากโปรเจคมี `package.json` แล้วให้ติดตั้ง package ต่าง ๆ ที่เป็น `dependencies` ของโปรเจคด้วยคำสั่ง

```bash
$ npm i
```

Package ที่ต่าง ๆ ที่ติดตั้งอาจมีการออกเวอร์ชันใหม่ ๆ ที่ได้รับการแก้ไขข้อบกพร่อง เพิ่มความสามารถ และอุดช่องโหว่ด้านความปลอดภัย โดยเราสามารถอัพเดต package เหล่านี้ให้เป็นเวอร์ชันล่าสุดด้วยคำสั่ง

```bash
$ npm update
```

สำหรับ lab นี้เราได้มีการติดตั้ง package ต่อไปนี้เรียบร้อยแล้วดังนั้น นศ. ไม่ต้องติดตั้งเองอีก

- `TypeScript` : เพื่อให้สามารถเขียนโค้ด TypeScript ในโปรเจคนี้
- `@types@node` : เพื่อเพิ่มข้อมูล Type definition ให้ node.js
- `ts-node` : เพื่อให้สามารถรันโค้ด TypeScript ได้ในขั้นตอนเดียวด้วยคำสั่ง `ts-node`
- `axios` : เพื่อใช้ในการสร้าง HTTP request สำหรับการดึงข้อมูล

เมื่อต้องการรัน `filename.ts` เราสามารถทำการแปลงโค้ด TypeScript เป็น JavaScript และสั่งรันในขั้นตอนเดียว ได้ด้วยคำสั่ง

```bash
# ในกรณีที่ติดตั้ง ts-node ด้วยคำสั่ง 'npm i ts-node' หรือ 'npm i -d ts-node'
$ npx ts-node <filename.ts>
```

### ทดสอบการทำงาน

นศ. สามารถทำการทดสอบความถูกต้องของโปรแกรมภายในเครื่อง นศ. ได้ด้วยการรันคำสั่งต่อไปนี้

```base
$ npm test <filename>
```

### หมายเหตุ:

ใน lab นี้ นศ. ไม่จำเป็นต้อง compile ไฟล์ TypeScript เป็น JavaScript ก่อนจะ push ส่งงาน

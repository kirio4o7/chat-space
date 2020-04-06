# README

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false, index: true|
|email|string|null: false, unique: true|
|password|string|null: false|
## Association
- has_many :groups_users
- has_many :messages
- has_many :groups, through: :groups_users

## groupsテーブル
Column|Type|Options|
|------|----|-------|
|name|string|null: false|
## Association
- has_many :messages
- has_many :groups_users
- has_many :users, through: :groups_users

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user|reference|null: false, foreign_key: true|
|group|reference|null: false, foreign_key: true|

## Association
- belongs_to :group
- belongs_to :user

## messagesテーブル
Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|group|reference|null: false, foreign_key: true|
|user|reference|null: false, foreign_key: true|

## Association
- belong_to :group
- belong_to :user
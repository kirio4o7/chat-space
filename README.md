# README

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false|
|email|string|null: false|
|password|string|null: false|
## Association
- has_many :groups_users
- has_many :messages
- has_many :groups, through: :groups_users

## groupsテーブル
Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|user|reference|null: false, foreign_key: true|
## Association
- belomg_to :users
- has_many :messages
- has_many :groups_useres
- has_many :users, through: :groups_users

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user|reference|null: false, foreign_key: true|
|group|reference|null: false, foreign_key: true|

## Association
- belongs_to :groups
- belomgs_to :users

## messagesテーブル
Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string|null: false|
|group|reference|null: false, foreign_key: true|
|user|reference|null: false, foreign_key: true|

## Association
- belomg_to :groups
- belomg_to :users
# README

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false|
|email|string|null: false|
|password|string|null: false|
## Association
- has_many :groups
- has_many :messages

## groupsテーブル
Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|user|reference|null: false, foreign_key: true|
## Association
- belomg_to :users
- has_many :messages

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
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
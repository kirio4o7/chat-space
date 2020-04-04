# README

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, goreign_key: true|

## Association
- belongs_to :group
- belomgs_to :user
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[34596],{34596:e=>{e.exports=JSON.parse('{"$ref":"#/definitions/user","definitions":{"user":{"properties":{"first_name":{"$ref":"#/$defs/name"},"last_name":{"$ref":"#/$defs/name"},"addresses":{"type":"array","items":false,"prefixItems":[{"$ref":"#/$defs/street_name"},{"$ref":"#/$defs/street_type"},{"$ref":"#/$defs/direction"}]}},"required":["first_name","last_name"]}},"$defs":{"name":{"type":"string"},"postal_code":{"type":"number","minimum":1000,"exclusiveMaximum":10000},"street_name":{"type":"string","minLength":3},"direction":{"enum":["NW","NE","SW","SE"]},"street_type":{"enum":["Street","Avenue","Boulevard"]}}}')}}]);
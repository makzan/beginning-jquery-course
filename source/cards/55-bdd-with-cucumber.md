---
cid: 55
title: BDD with Cucumber
date: 2016-06-06
---

<script charset="ISO-8859-1" src="//fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:62.5% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_n57hflu8on seo=false videoFoam=true" style="height:100%;width:100%">&nbsp;</div></div></div>

Gemfile

~~~
group :test do
  gem 'cucumber-rails', :require => false
  # database_cleaner is not required, but highly recommended
  gem 'database_cleaner'

  gem 'rspec-rails'
end
~~~

Features

~~~
Feature: Basic
  Scenario: In the homepage
    Given I am on homepage
    Then I should see "Welcome"

~~~

~~~
Feature: Authenticate
  Scenario: Before login
    Given I am not logged in
    When I go to homepage
    Then I should see "Sign in"
    And I should see "Sign up"

  Scenario: Login Page
    Given I am not logged in
    And I am on homepage
    When I click "Sign in" link
    Then I should be in the sign in page

  Scenario: Login action
    Given I have an account
    And I am not logged in
    And I am on sign in page
    When I fill in correct account information
    And press "Log in" button
    Then I should see "Sign out"

  Scenario: Logged in
    Given I have logged in
    When I go to homepage
    Then I should see "Sign out"

  Scenario: Logout action
    Given I have logged in
    And I am on homepage
    When I click "Sign out" link
    Then I should see "Sign in"
    And I should see "Sign up"
~~~


~~~
Given(/^I am on homepage$/) do
  visit root_path
end
When(/^I go to homepage$/) do
  visit root_path
end


When(/^I click "([^"]*)" link$/) do |text|
  click_link text
end

When(/^I click "([^"]*)" link and confirm$/) do |text|
  page.accept_alert do
    click_link text
  end
end

When(/^press "([^"]*)" button$/) do |text|
  click_button text
end



Then(/^I should see "([^"]*)"$/) do |text|
  expect(page).to have_content text
end

Then(/^I should not see "([^"]*)"$/) do |text|
  expect(page).not_to have_content text
end



~~~

Steps ruby code

~~~
test_email = "test@makzan.net"
test_password = "justatest"

Given(/^I am not logged in$/) do
  visit '/users/sign_out'
end

Then(/^I should be in the sign in page$/) do
  expect(current_path).to eq('/users/sign_in')
end

Given(/^I have an account$/) do
  User.create({email:test_email, password:test_password})
end

Given(/^I am on sign in page$/) do
  visit new_user_session_path
end

When(/^I fill in correct account information$/) do
  fill_in 'Email', with: test_email
  fill_in 'Password', with: test_password
end

Given(/^I have logged in$/) do
  User.create({email:test_email, password:test_password})
  visit new_user_session_path
  fill_in 'Email', with: test_email
  fill_in 'Password', with: test_password
  click_button 'Log in'
end
~~~


~~~
email_for_thomas = "mak@makzan.net"

Given(/^a contact named "([^"]*)" with email "([^"]*)"$/) do |name, email|
  Contact.create({first_name:name, email:email})
end

Given(/^I am on contact page for "([^"]*)"$/) do |arg1|
  c = Contact.create({first_name:arg1, email: email_for_thomas})
  visit "/contacts/#{c.id}"
end

When(/^I visit contact edit page for "([^"]*)"$/) do |arg1|
  c = Contact.create({first_name:arg1, email: email_for_thomas})
  visit "/contacts/#{c.id}/edit"
end

Given(/^I am on "([^"]*)" page$/) do |arg1|
  c = Contact.create({first_name:arg1, email: email_for_thomas})
  visit "/contacts/#{c.id}/"
end

When(/^I fill in contact information with email "([^"]*)"$/) do |arg1|
  pending # Write code here that turns the phrase above into concrete actions
end

~~~
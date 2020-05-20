require 'test_helper'

class InterestsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @interest = interests(:one)
  end

  test "should get index" do
    get interests_url, as: :json
    assert_response :success
  end

  test "should create interest" do
    assert_difference('Interest.count') do
      post interests_url, params: { interest: { text: @interest.text } }, as: :json
    end

    assert_response 201
  end

  test "should show interest" do
    get interest_url(@interest), as: :json
    assert_response :success
  end

  test "should update interest" do
    patch interest_url(@interest), params: { interest: { text: @interest.text } }, as: :json
    assert_response 200
  end

  test "should destroy interest" do
    assert_difference('Interest.count', -1) do
      delete interest_url(@interest), as: :json
    end

    assert_response 204
  end
end

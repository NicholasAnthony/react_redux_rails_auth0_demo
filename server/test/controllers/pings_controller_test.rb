require 'test_helper'

class PingsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @ping = pings(:one)
  end

  test "should get index" do
    get pings_url, as: :json
    assert_response :success
  end

  test "should create ping" do
    assert_difference('Ping.count') do
      post pings_url, params: { ping: { title: @ping.title } }, as: :json
    end

    assert_response 201
  end

  test "should show ping" do
    get ping_url(@ping), as: :json
    assert_response :success
  end

  test "should update ping" do
    patch ping_url(@ping), params: { ping: { title: @ping.title } }, as: :json
    assert_response 200
  end

  test "should destroy ping" do
    assert_difference('Ping.count', -1) do
      delete ping_url(@ping), as: :json
    end

    assert_response 204
  end
end

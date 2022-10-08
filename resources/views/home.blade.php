@extends('layouts.app')

@section('content')
                    @if (session('status'))
                    @endif
                        <component/>
                    {{ __('You are logged in!') }}
                
@endsection
